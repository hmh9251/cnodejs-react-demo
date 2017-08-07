import React from 'react';
import style from './style';

function Pagination() {
  return (
    <div class="pagination" current_page="1">
  <ul>
    <li class="disabled"><a>«</a></li>
    <li class="disabled active"><a>1</a></li>
    <li><a href="/?tab=all&amp;page=2">2</a></li>
    <li><a href="/?tab=all&amp;page=3">3</a></li>
    <li><a href="/?tab=all&amp;page=4">4</a></li>
    <li><a href="/?tab=all&amp;page=5">5</a></li>
    <li><a>...</a></li>
    <li><a href="/?tab=all&amp;page=115">»</a></li>
  </ul>
</div>
  )
}

export default Pagination;
