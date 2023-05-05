import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { FactoryCreated } from "../generated/schema"
import { FactoryCreated as FactoryCreatedEvent } from "../generated/FactoryManager/FactoryManager"
import { handleFactoryCreated } from "../src/factory-manager"
import { createFactoryCreatedEvent } from "./factory-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let factoryId = BigInt.fromI32(234)
    let factoryAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newFactoryCreatedEvent = createFactoryCreatedEvent(
      factoryId,
      factoryAddress
    )
    handleFactoryCreated(newFactoryCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("FactoryCreated created and stored", () => {
    assert.entityCount("FactoryCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "FactoryCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "factoryId",
      "234"
    )
    assert.fieldEquals(
      "FactoryCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "factoryAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
