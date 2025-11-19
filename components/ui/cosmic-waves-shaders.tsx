"use client";

import React, { forwardRef } from "react";
import { Shader } from "react-shaders";

import { cn } from "@/lib/utils";

interface CosmicWavesShadersProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  amplitude?: number;
  frequency?: number;
  starDensity?: number;
  colorShift?: number;
}

const cosmicWavesFragment = `
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for(int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

float stars(vec2 p, float density) {
  vec2 grid = floor(p * density);
  vec2 local = fract(p * density);
  float h = hash(grid);
  if(h > 0.95) {
    float d = length(local - 0.5);
    float star = exp(-d * 18.0);
    return star * (0.5 + 0.5 * sin(iTime * 2.0 + h * 10.0));
  }
  return 0.0;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
  vec2 uv = fragCoord.xy / iResolution.xy;
  vec2 p = uv * 2.0 - 1.0;
  p.x *= iResolution.x / iResolution.y;
  float time = iTime * u_speed;

  vec2 wavePos = p * u_frequency;
  wavePos.y += time * 0.3;

  float wave1 = sin(wavePos.x + cos(wavePos.y + time) * 0.6) * u_amplitude;
  float wave2 = sin(wavePos.x * 1.4 - wavePos.y * 0.8 + time * 1.1) * u_amplitude * 0.7;
  float wave3 = sin(wavePos.x * 0.7 + wavePos.y * 1.3 - time * 0.9) * u_amplitude * 0.5;
  float waves = (wave1 + wave2 + wave3) * 0.35;

  vec2 noisePos = p * 1.5 + vec2(time * 0.12, time * 0.05);
  float noiseValue = fbm(noisePos) * 0.4;
  float pattern = waves + noiseValue;

  float gradient = length(p) * 0.6;
  gradient += pattern;

  vec3 color1 = vec3(0.04, 0.0, 0.0);         // near black
  vec3 color2 = vec3(0.55, 0.05, 0.08);       // brand deep red
  vec3 color3 = vec3(0.75, 0.1, 0.12);        // bright red
  vec3 color4 = vec3(0.83, 0.72, 0.33);       // gold

  float colorTime = time * u_colorShift + pattern * 1.5;
  vec3 finalColor;
  float t = fract(colorTime * 0.25);
  if(t < 0.25) {
    finalColor = mix(color1, color2, t * 4.0);
  } else if(t < 0.5) {
    finalColor = mix(color2, color3, (t - 0.25) * 4.0);
  } else if(t < 0.75) {
    finalColor = mix(color3, color4, (t - 0.5) * 4.0);
  } else {
    finalColor = mix(color4, color1, (t - 0.75) * 4.0);
  }

  finalColor *= (0.45 + pattern * 0.85);

  float starField = stars(p + vec2(time * 0.02, time * 0.01), u_starDensity * 15.0);
  starField += stars(p * 1.4 + vec2(-time * 0.015, time * 0.008), u_starDensity * 12.0);
  finalColor += vec3(starField * 0.65, starField * 0.55, starField * 0.35);

  float glow = exp(-length(p) * 0.65) * 0.4;
  finalColor += glow * vec3(0.7, 0.3, 0.15);

  float vignette = 1.0 - length(uv - 0.5) * 1.1;
  vignette = smoothstep(0.0, 1.0, vignette);
  finalColor *= vignette;

  fragColor = vec4(finalColor, 1.0);
}
`;

export const CosmicWavesShaders = forwardRef<HTMLDivElement, CosmicWavesShadersProps>(
  ({ speed = 0.8, amplitude = 1.0, frequency = 1.0, starDensity = 1.0, colorShift = 1.0, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full h-full", className)} {...props}>
        <Shader
          fs={cosmicWavesFragment}
          uniforms={{
            u_speed: { type: "1f", value: speed },
            u_amplitude: { type: "1f", value: amplitude },
            u_frequency: { type: "1f", value: frequency },
            u_starDensity: { type: "1f", value: starDensity },
            u_colorShift: { type: "1f", value: colorShift },
          }}
          style={{ width: "100%", height: "100%" } as CSSStyleDeclaration}
        />
      </div>
    );
  }
);

CosmicWavesShaders.displayName = "CosmicWavesShaders";
