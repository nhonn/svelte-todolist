import App from "./components/App.svelte";

const demoArray = [
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
];

const app = new App({
  target: document.body,
  props: {
    tasks: demoArray,
  },
});

export default app;
