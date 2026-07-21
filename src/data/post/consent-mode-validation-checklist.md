---
publishDate: 2026-07-19
title: Checklist de validation Consent Mode
excerpt: Comment tester le comportement des tags selon les choix de consentement, sans confondre conformité juridique et validation technique.
category: Consentement
tags:
  - Consent Mode
  - CMP
  - GTM
author: Tian HUANG
metadata:
  title: Checklist de validation Consent Mode
  description: Contrôles techniques pour vérifier les signaux Consent Mode, la CMP et le déclenchement des tags marketing.
---

Le Consent Mode ne se valide pas seulement en regardant si une bannière s’affiche. Il faut vérifier les signaux envoyés, l’ordre de chargement et le comportement réel des tags.

Une validation technique ne remplace pas un avis juridique. Elle permet de vérifier que la configuration respecte les choix utilisateur tels qu’ils sont transmis aux outils.

## Scénarios à tester

- Acceptation complète.
- Refus complet.
- Absence de choix.
- Changement de préférence.
- Navigation entre plusieurs pages.

## Preuves à conserver

Captures GTM Preview, Tag Assistant, Network, état du consentement et liste des tags déclenchés ou bloqués.
