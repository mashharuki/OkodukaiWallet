// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./SimpleAccountFactory.sol";
import "./../interfaces/IEntryPoint.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * FactoryManager コントラクト
 */
contract FactoryManager {
    using Counters for Counters.Counter;
    // エントリーポイントコントラクトのアドレス
    address public ENTRY_POINT_ADDRESS = 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789;

    Counters.Counter private _factoryIds;

    // 生成したFactoryコントラクトを格納するための変数
    SimpleAccountFactory[] public factories;

    // id と FactoryInfoの紐付けを管理するmapping変数
    mapping (uint => address) public factoryMap;

    // SimpleAccountFactory コントラクトを生成した時のイベント
    event FactoryCreated (uint factoryId, address factoryAddress);

    /**
     * Factoryコントラクトを生成するための関数
     */
    function createFactory () public {
        uint newId = _factoryIds.current();
        // インスタンスを生成
        SimpleAccountFactory factory = new SimpleAccountFactory(IEntryPoint(ENTRY_POINT_ADDRESS));
        // 配列に追加する。
        factories.push(factory);
        factoryMap[newId] = address(factory);
        _factoryIds.increment();

        emit FactoryCreated(newId, address(factory));
    }

    /**
     * 生成したFactoryコントラクトの情報を取得するコントラクト
     */
    function getFactories() public view returns (SimpleAccountFactory[] memory coll) {
        //返却
        return factories;
    }

    /**
     * addStakeを実行するためのメソッド
     * @param factoryAddress factoryコントラクトのアドレス
     * @param unstakeDelaySec unstakeDelaySec
     */
    function addStake(address factoryAddress, uint32 unstakeDelaySec) public payable {
        SimpleAccountFactory factory = SimpleAccountFactory(factoryAddress);
        // addStake()を呼び出し
        factory.addStake{value: msg.value}(unstakeDelaySec);
    }
}