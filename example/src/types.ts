interface School {
  name: string;
}

/**
 * 人的接口
 */
export interface Person {
  /**
   * 人名
   */
  name: string;
  /**
   * 年龄
   */
  age: number;
  /**
   * 所属学校
   */
  school: School;
}
