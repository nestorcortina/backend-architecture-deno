import { red } from "https://deno.land/std@0.85.0/fmt/colors.ts";

import TestModel from "../../models/test/test.model.ts";
import Logger from "../../helpers/logger.ts";

export default class TestService {
  private static instance: TestService;
  private readonly testModel!: TestModel;
  private constructor() {
    this.testModel = TestModel.getInstance();
  }

  public static getInstance(): TestService {
    if (TestService.instance === undefined) {
      TestService.instance = new TestService();
    }
    return TestService.instance;
  }

  test = async (test: number): Promise<string> => {
    try {
      const resp = this.testModel.test();
      const result = `${resp} + ${test} es ${resp + test}`;
      return result;
    } catch (error) {
      Logger.error(red("Error TestService test "), error);
      throw new Error("TECHNICAL ERROR");
    }
  };
}
