import { Container } from "inversify";
import { types } from "@typegoose/typegoose";
import { Component } from "../../types/index.js";
import { OfferService } from "./offer-service.interface.js";
import { BaseOfferService } from "./offer.service.js";
import { OfferEntity, OfferModel } from "./offer.entity.js";

export function createOfferContainer() {
  const offerContainer = new Container();

  offerContainer.bind<OfferService>(Component.OfferService).to(BaseOfferService).inSingletonScope();
  offerContainer.bind<types.ModelType<OfferEntity>>(Component.OfferModel).toConstantValue(OfferModel);

  return offerContainer;
}
