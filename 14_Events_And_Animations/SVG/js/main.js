var length = $("path")
  .get(0)
  .getTotalLength();
$("path").css({
  "stroke-dasharray": length,
  "stroke-dashoffset": length
});

$("path").animate(
  {
    "stroke-dashoffset": 0
  },
  5000
);
