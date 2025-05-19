import styles from './Calendar.module.scss';

const Calendar = () => {
  return (
    <div className={styles.calendar_container}>
      <h2>Calendar</h2>

      <div>
        <div className={styles.calendar_header}>
          <h3>2025년 8월</h3>
        </div>

        <div className={styles.calendar_body}>
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>

          <div />
          <div />
          <div />
          <div />
          <div />
          <div>
            <p>1</p>
          </div>
          <div className={styles.calendar_special_day}>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
          <div>
            <p>4</p>
          </div>
          <div>
            <p>5</p>
          </div>
          <div>
            <p>6</p>
          </div>
          <div>
            <p>7</p>
          </div>
          <div>
            <p>8</p>
          </div>
          <div>
            <p>9</p>
          </div>
          <div>
            <p>10</p>
          </div>
          <div>
            <p>11</p>
          </div>
          <div>
            <p>12</p>
          </div>
          <div>
            <p>13</p>
          </div>
          <div>
            <p>14</p>
          </div>
          <div>
            <p>15</p>
          </div>
          <div>
            <p>16</p>
          </div>
          <div>
            <p>17</p>
          </div>
          <div>
            <p>18</p>
          </div>
          <div>
            <p>19</p>
          </div>
          <div>
            <p>20</p>
          </div>
          <div>
            <p>21</p>
          </div>
          <div>
            <p>22</p>
          </div>
          <div>
            <p>23</p>
          </div>
          <div>
            <p>24</p>
          </div>
          <div>
            <p>25</p>
          </div>
          <div>
            <p>26</p>
          </div>
          <div>
            <p>27</p>
          </div>
          <div>
            <p>28</p>
          </div>
          <div>
            <p>29</p>
          </div>
          <div>
            <p>30</p>
          </div>
          <div>
            <p>31</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
