import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CtSearchParams } from './ct-search/ct-search.component';
import 'rxjs/add/operator/map';


const searchTrialsURL = 'https://clinicaltrialsapi.cancer.gov/v1/clinical-trials';
const getTrialURL = 'https://clinicaltrialsapi.cancer.gov/v1/clinical-trial';
// const API_URL = './data/mockData.json';

export interface OtherId {
  name: string;
  value: string;
}

export interface AssociatedStudy {
  study_id: string;
  study_id_type: string;
}

export interface OutcomeMeasure {
  name: string;
  description: string;
  timeframe: string;
  type_code: string;
}

export interface BioSpecimen {
  f1: string;
  f2?: any;
  f3: string;
  f4?: any;
}

export interface PrimaryPurpose {
  primary_purpose_code: string;
  primary_purpose_other_text?: any;
  primary_purpose_additional_qualifier_code?: any;
}

export interface Phase {
  phase: string;
  phase_other_text?: any;
  phase_additional_qualifier_code?: any;
}

export interface Masking {
  masking: string;
  masking_allocation_code: string;
  masking_role_investigator?: any;
  masking_role_outcome_assessor?: any;
  masking_role_subject?: any;
  masking_role_caregiver?: any;
}

export interface CentralContact {
  central_contact_email?: any;
  central_contact_name?: any;
  central_contact_phone?: any;
  central_contact_type?: any;
}

export interface Collaborator {
  name: string;
  functional_role: string;
}

export interface OrgCoordinates {
  lat: number;
  lon: number;
}

export interface Site {
  contact_email: string;
  contact_name: string;
  contact_phone: string;
  generic_contact?: any;
  recruitment_status: string;
  recruitment_status_date: string;
  local_site_identifier: string;
  org_address_line_1: string;
  org_address_line_2: string;
  org_city: string;
  org_country: string;
  org_email: string;
  org_family: string;
  org_fax: string;
  org_name: string;
  org_to_family_relationship: string;
  org_phone: string;
  org_postal_code: string;
  org_state_or_province: string;
  org_status: string;
  org_status_date: string;
  org_tty: string;
  org_coordinates: OrgCoordinates;
}

export interface Concept {
  idx: number;
  label: string;
  code: string;
}

export interface Path {
  direction: number;
  concepts: Concept[];
}

export interface Disease {
  disease_code: string;
  inclusion_indicator: string;
  lead_disease_indicator?: any;
  nci_thesaurus_concept_id: string;
  preferred_name: string;
  synonyms: string[];
  display_name: string;
  parents: string[];
  paths: Path[];
  type: string[];
  ctrp_display_name: string;
}

export interface Biomarker {
  assay_purpose: string;
  long_name: string;
  name: string;
  synonyms: string[];
  hugo_biomarker_code?: any;
  nci_thesaurus_concept_id: string;
  eligibility_criterion: string;
}

export interface Structured {
  gender: string;
  max_age: string;
  max_age_number: number;
  max_age_unit: string;
  min_age: string;
  min_age_number: number;
  min_age_unit: string;
  max_age_in_years: number;
  min_age_in_years: number;
}

export interface Unstructured {
  display_order: number;
  inclusion_indicator: boolean;
  description: string;
}

export interface Eligibility {
  structured: Structured;
  unstructured: Unstructured[];
}

export interface Intervention {
  intervention_name: string;
  intervention_type: string;
  intervention_code: string;
  intervention_description: string;
  parents: string[];
  inclusion_indicator: string;
  synonyms: string[];
  intervention_category: string;
}

export interface Arm {
  arm_name: string;
  arm_type: string;
  arm_description: string;
  interventions: Intervention[];
}

export interface Trial {
  nci_id: string;
  nct_id: string;
  protocol_id: string;
  ccr_id?: any;
  ctep_id: string;
  dcp_id?: any;
  other_ids: OtherId[];
  associated_studies: AssociatedStudy[];
  outcome_measures: OutcomeMeasure[];
  amendment_date: Date;
  current_trial_status: string;
  current_trial_status_date: string;
  start_date: string;
  start_date_type_code: string;
  completion_date?: any;
  completion_date_type_code?: any;
  record_verification_date: string;
  brief_title: string;
  official_title: string;
  acronym?: any;
  keywords?: any;
  brief_summary: string;
  detail_description: string;
  classification_code: string;
  interventional_model: string;
  accepts_healthy_volunteers_indicator: string;
  study_protocol_type: string;
  study_subtype_code?: any;
  study_population_description?: any;
  study_model_code?: any;
  study_model_other_text?: any;
  sampling_method_code?: any;
  bio_specimen: BioSpecimen;
  primary_purpose: PrimaryPurpose;
  phase: Phase;
  masking: Masking;
  principal_investigator: string;
  central_contact: CentralContact;
  lead_org: string;
  collaborators: Collaborator[];
  sites: Site[];
  anatomic_sites: string[];
  diseases: Disease[];
  biomarkers: Biomarker[];
  minimum_target_accrual_number: number;
  eligibility: Eligibility;
  number_of_arms: number;
  arms: Arm[];
}

export interface Trials {
  total: number;
  trials: Trial[];
}

export interface MockTrialDetails {
  title: string;
  desc: string;
}

@Injectable()
export class CtsServiceService {

  trials: Trials;

  constructor(private http: HttpClient) {}

  getTrials(formData: CtSearchParams): Observable<Trials> {

    const params = {
      _fulltext: formData.keyword,
      'eligibility.structured.max_age_in_years_gte': formData.age,
      'eligibility.structured.min_age_in_years_lte': formData.age,
      'sites.org_postal_code': formData.zipCode
    };

    return this.http.get<Trials>(searchTrialsURL, {params: params});
      // .map(response => response as Trials);
  }

  getTrial(id: any): Observable<Trial> {
    return this.http.get<Trial>(getTrialURL + '/' + id);
  }

}
