---
publishDate: 2026-07-21
title: Audit tracking GA4 & GTM pour e-commerce
excerpt: Une checklist courte pour comprendre pourquoi GA4, GTM, Ads et le back-office ne racontent pas toujours la même histoire.
category: Tracking
tags:
  - GA4
  - GTM
  - ecommerce
author: Tian HUANG
metadata:
  title: Audit tracking GA4 & GTM pour e-commerce
  description: Points de contrôle pour auditer un setup GA4, GTM et e-commerce avant de corriger les écarts de données.
---

Un audit tracking ne commence pas par l’ouverture de GTM. Il commence par une question business simple: quel chiffre bloque la décision ?

Pour un site e-commerce, les premiers contrôles utiles sont souvent les mêmes: la présence des événements clés, la cohérence du `transaction_id`, la valeur envoyée dans `purchase`, la devise, les items, les UTM et le comportement des tags selon le consentement.

Le livrable attendu n’est pas une longue liste technique. Il doit distinguer les écarts normaux des erreurs qui faussent les décisions marketing.

## Points à vérifier

- Les événements clés existent: `view_item`, `add_to_cart`, `begin_checkout`, `purchase`.
- Le `transaction_id` est stable et non dupliqué.
- Le revenu GA4 peut être rapproché du back-office.
- Les UTM sont conservées jusqu’à la conversion.
- Les tags respectent les signaux de consentement.

## Livrable utile

Une table simple avec le problème, la preuve, l’impact business, la sévérité et la prochaine action.
