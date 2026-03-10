$(function () {
  $('[data-toggle="collapse"]').on('click', function () {
    var $btn = $(this);
    var $target = $($btn.data('target'));

    // 같은 collapse를 제어하는 모든 버튼 찾기
    var targetId = $btn.data('target');
    var $allBtns = $('[data-toggle="collapse"][data-target="' + targetId + '"]');

    $target.one('shown.bs.collapse', function () {
      $allBtns.each(function () {
        $(this).removeClass('collapsed');
        $(this).find('.guide-toggle-text').text('닫기');
        $(this).find('svg.icon use').attr('href', '#chevron-up');
      });
    });

    $target.one('hidden.bs.collapse', function () {
      $allBtns.each(function () {
        $(this).addClass('collapsed');
        $(this).find('.guide-toggle-text').text('자세히 보기');
        $(this).find('svg.icon use').attr('href', '#chevron-down');
      });
    });
  });
});
