import { FactoryCreated as FactoryCreatedEvent } from "../generated/FactoryManager/FactoryManager"
import { FactoryCreated } from "../generated/schema"

export function handleFactoryCreated(event: FactoryCreatedEvent): void {
  let entity = new FactoryCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.factoryId = event.params.factoryId
  entity.factoryAddress = event.params.factoryAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
