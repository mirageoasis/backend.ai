"""add foreign key constraints to columns in endpoints table

Revision ID: a083c6c962e5
Revises: 97d8c7aa5e96
Create Date: 2023-09-19 15:14:05.746289

"""

from alembic import op

# revision identifiers, used by Alembic.
revision = "a083c6c962e5"
down_revision = "97d8c7aa5e96"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_foreign_key(
        op.f("fk_endpoint_tokens_domain_domains"),
        "endpoint_tokens",
        "domains",
        ["domain"],
        ["name"],
        ondelete="CASCADE",
    )
    op.create_foreign_key(
        op.f("fk_endpoint_tokens_project_groups"),
        "endpoint_tokens",
        "groups",
        ["project"],
        ["id"],
        ondelete="CASCADE",
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(
        op.f("fk_endpoint_tokens_project_groups"), "endpoint_tokens", type_="foreignkey"
    )
    op.drop_constraint(
        op.f("fk_endpoint_tokens_domain_domains"), "endpoint_tokens", type_="foreignkey"
    )
    # ### end Alembic commands ###
