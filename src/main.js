import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    tasks: [
      "Làm bài midterm WNC",
      "Ăn trưa",
      "Ngủ trưa",
      "Chạy bộ",
      "Check mail",
      "Check facebook",
      "Ăn tối",
      "Viết report",
      "Làm backend cuối kỳ",
      "Làm frontend cuối kỳ",
    ],
  },
});

export default app;
