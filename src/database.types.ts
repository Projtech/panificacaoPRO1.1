export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          cnpj: string | null
          created_at: string | null
          id: string
          name: string
          owner_email: string | null
          owner_name: string | null
          owner_phone: string | null
          owner_whatsapp: string | null
        }
        Insert: {
          cnpj?: string | null
          created_at?: string | null
          id?: string
          name: string
          owner_email?: string | null
          owner_name?: string | null
          owner_phone?: string | null
          owner_whatsapp?: string | null
        }
        Update: {
          cnpj?: string | null
          created_at?: string | null
          id?: string
          name?: string
          owner_email?: string | null
          owner_name?: string | null
          owner_phone?: string | null
          owner_whatsapp?: string | null
        }
        Relationships: []
      }
      company_users: {
        Row: {
          company_id: string | null
          created_at: string | null
          id: string
          role: string
          status: string | null
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          role: string
          status?: string | null
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          role?: string
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_users_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      groups: {
        Row: {
          ativo: boolean | null
          company_id: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "groups_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_transactions: {
        Row: {
          ativo: boolean | null
          company_id: string | null
          cost: number | null
          created_at: string | null
          date: string
          id: string
          invoice: string | null
          notes: string | null
          product_id: string | null
          production_order_id: string | null
          quantity: number
          reason: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          company_id?: string | null
          cost?: number | null
          created_at?: string | null
          date: string
          id?: string
          invoice?: string | null
          notes?: string | null
          product_id?: string | null
          production_order_id?: string | null
          quantity: number
          reason?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          company_id?: string | null
          cost?: number | null
          created_at?: string | null
          date?: string
          id?: string
          invoice?: string | null
          notes?: string | null
          product_id?: string | null
          production_order_id?: string | null
          quantity?: number
          reason?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_transactions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_transactions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_transactions_production_order_id_fkey"
            columns: ["production_order_id"]
            isOneToOne: false
            referencedRelation: "production_orders"
            referencedColumns: ["id"]
          },
        ]
      }
      production_list_items: {
        Row: {
          ativo: boolean | null
          company_id: string | null
          created_at: string | null
          id: string
          list_id: string | null
          product_id: string | null
          quantity: number
          unit: string
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          list_id?: string | null
          product_id?: string | null
          quantity?: number
          unit?: string
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          list_id?: string | null
          product_id?: string | null
          quantity?: number
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "production_list_items_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "production_list_items_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "production_lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "production_list_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      production_lists: {
        Row: {
          ativo: boolean | null
          company_id: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          type: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "production_lists_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      production_order_items: {
        Row: {
          actual_quantity_kg: number | null
          actual_quantity_units: number | null
          ativo: boolean | null
          company_id: string | null
          created_at: string | null
          id: string
          order_id: string | null
          planned_quantity_kg: number
          planned_quantity_units: number | null
          recipe_id: string | null
          recipe_name: string
          unit: string
          updated_at: string | null
        }
        Insert: {
          actual_quantity_kg?: number | null
          actual_quantity_units?: number | null
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          order_id?: string | null
          planned_quantity_kg: number
          planned_quantity_units?: number | null
          recipe_id?: string | null
          recipe_name: string
          unit: string
          updated_at?: string | null
        }
        Update: {
          actual_quantity_kg?: number | null
          actual_quantity_units?: number | null
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          order_id?: string | null
          planned_quantity_kg?: number
          planned_quantity_units?: number | null
          recipe_id?: string | null
          recipe_name?: string
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "production_order_items_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "production_order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "production_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "production_order_items_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      production_orders: {
        Row: {
          adjust_materials: boolean | null
          ativo: boolean | null
          company_id: string | null
          created_at: string | null
          date: string
          id: string
          order_number: string
          status: string
          updated_at: string | null
        }
        Insert: {
          adjust_materials?: boolean | null
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          date: string
          id?: string
          order_number: string
          status: string
          updated_at?: string | null
        }
        Update: {
          adjust_materials?: boolean | null
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          date?: string
          id?: string
          order_number?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "production_orders_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          all_days: boolean | null
          ativo: boolean | null
          code: string | null
          company_id: string | null
          cost: number
          created_at: string | null
          current_stock: number | null
          friday: boolean | null
          group_id: string | null
          id: string
          kg_weight: number | null
          min_stock: number
          monday: boolean | null
          name: string
          product_type: string | null
          recipe_id: string | null
          saturday: boolean | null
          sku: string | null
          subgroup_id: string | null
          sunday: boolean | null
          supplier: string | null
          thursday: boolean | null
          tuesday: boolean | null
          unit: string
          unit_price: number | null
          unit_weight: number | null
          updated_at: string | null
          wednesday: boolean | null
        }
        Insert: {
          all_days?: boolean | null
          ativo?: boolean | null
          code?: string | null
          company_id?: string | null
          cost: number
          created_at?: string | null
          current_stock?: number | null
          friday?: boolean | null
          group_id?: string | null
          id?: string
          kg_weight?: number | null
          min_stock: number
          monday?: boolean | null
          name: string
          product_type?: string | null
          recipe_id?: string | null
          saturday?: boolean | null
          sku?: string | null
          subgroup_id?: string | null
          sunday?: boolean | null
          supplier?: string | null
          thursday?: boolean | null
          tuesday?: boolean | null
          unit: string
          unit_price?: number | null
          unit_weight?: number | null
          updated_at?: string | null
          wednesday?: boolean | null
        }
        Update: {
          all_days?: boolean | null
          ativo?: boolean | null
          code?: string | null
          company_id?: string | null
          cost?: number
          created_at?: string | null
          current_stock?: number | null
          friday?: boolean | null
          group_id?: string | null
          id?: string
          kg_weight?: number | null
          min_stock?: number
          monday?: boolean | null
          name?: string
          product_type?: string | null
          recipe_id?: string | null
          saturday?: boolean | null
          sku?: string | null
          subgroup_id?: string | null
          sunday?: boolean | null
          supplier?: string | null
          thursday?: boolean | null
          tuesday?: boolean | null
          unit?: string
          unit_price?: number | null
          unit_weight?: number | null
          updated_at?: string | null
          wednesday?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "products_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_subgroup_id_fkey"
            columns: ["subgroup_id"]
            isOneToOne: false
            referencedRelation: "subgroups"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          company_id: string | null
          created_at: string | null
          force_password_change: boolean | null
          full_name: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          force_password_change?: boolean | null
          full_name?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          force_password_change?: boolean | null
          full_name?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_ingredients: {
        Row: {
          ativo: boolean | null
          company_id: string | null
          cost: number
          created_at: string | null
          etapa: string | null
          id: string
          is_sub_recipe: boolean
          product_id: string | null
          quantity: number
          recipe_id: string | null
          sub_recipe_id: string | null
          total_cost: number
          unit: string
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          company_id?: string | null
          cost: number
          created_at?: string | null
          etapa?: string | null
          id?: string
          is_sub_recipe?: boolean
          product_id?: string | null
          quantity: number
          recipe_id?: string | null
          sub_recipe_id?: string | null
          total_cost: number
          unit: string
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          company_id?: string | null
          cost?: number
          created_at?: string | null
          etapa?: string | null
          id?: string
          is_sub_recipe?: boolean
          product_id?: string | null
          quantity?: number
          recipe_id?: string | null
          sub_recipe_id?: string | null
          total_cost?: number
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ingredients_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_ingredients_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_ingredients_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_ingredients_sub_recipe_id_fkey"
            columns: ["sub_recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipes: {
        Row: {
          all_days: boolean | null
          ativo: boolean | null
          code: string | null
          company_id: string | null
          cost_per_kg: number | null
          cost_per_unit: number | null
          created_at: string | null
          friday: boolean | null
          gif_url: string | null
          group_id: string | null
          id: string
          instructions: string | null
          monday: boolean | null
          name: string
          photo_url: string | null
          saturday: boolean | null
          subgroup_id: string | null
          sunday: boolean | null
          thursday: boolean | null
          tuesday: boolean | null
          updated_at: string | null
          wednesday: boolean | null
          yield_kg: number
          yield_units: number | null
        }
        Insert: {
          all_days?: boolean | null
          ativo?: boolean | null
          code?: string | null
          company_id?: string | null
          cost_per_kg?: number | null
          cost_per_unit?: number | null
          created_at?: string | null
          friday?: boolean | null
          gif_url?: string | null
          group_id?: string | null
          id?: string
          instructions?: string | null
          monday?: boolean | null
          name: string
          photo_url?: string | null
          saturday?: boolean | null
          subgroup_id?: string | null
          sunday?: boolean | null
          thursday?: boolean | null
          tuesday?: boolean | null
          updated_at?: string | null
          wednesday?: boolean | null
          yield_kg: number
          yield_units?: number | null
        }
        Update: {
          all_days?: boolean | null
          ativo?: boolean | null
          code?: string | null
          company_id?: string | null
          cost_per_kg?: number | null
          cost_per_unit?: number | null
          created_at?: string | null
          friday?: boolean | null
          gif_url?: string | null
          group_id?: string | null
          id?: string
          instructions?: string | null
          monday?: boolean | null
          name?: string
          photo_url?: string | null
          saturday?: boolean | null
          subgroup_id?: string | null
          sunday?: boolean | null
          thursday?: boolean | null
          tuesday?: boolean | null
          updated_at?: string | null
          wednesday?: boolean | null
          yield_kg?: number
          yield_units?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "recipes_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipes_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipes_subgroup_id_fkey"
            columns: ["subgroup_id"]
            isOneToOne: false
            referencedRelation: "subgroups"
            referencedColumns: ["id"]
          },
        ]
      }
      subgroups: {
        Row: {
          ativo: boolean | null
          company_id: string | null
          created_at: string | null
          description: string | null
          group_id: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          group_id?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          group_id?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subgroups_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subgroups_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      company_user_details_view: {
        Row: {
          association_created_at: string | null
          company_id: string | null
          display_name: string | null
          email: string | null
          force_password_change: boolean | null
          last_sign_in_at: string | null
          profile_full_name: string | null
          role: string | null
          status: string | null
          user_created_at: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_users_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      get_my_admin_company_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      register_company_and_set_admin: {
        Args: {
          p_company_name: string
          p_cnpj: string
          p_company_owner_name: string
          p_company_owner_phone: string
          p_company_owner_email: string
          p_company_owner_whatsapp: string
          p_admin_user_id: string
          p_admin_full_name: string
          p_force_password_change?: boolean
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
