import "@testing-library/jest-dom";

class MockResizeObserver {
  observe() {
    // noop for tests
  }
  unobserve() {
    // noop for tests
  }
  disconnect() {
    // noop for tests
  }
}

// @ts-expect-error jsdom does not implement ResizeObserver
global.ResizeObserver = global.ResizeObserver ?? MockResizeObserver;
