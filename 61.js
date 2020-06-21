(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{640:function(t,n,e){"use strict";e.r(n),n.default='# Popover\n\n## {{ $t("common.usage.preview") }}\n\n<example></example>\n\n## {{ $t("common.usage.usage") }}\n\n{{ $t("common.usage.usage-tips") }}\n\n```\n&lt;!-- Default Style --&gt;\n\n&lt;q-popover\n    title=&quot;...&quot;\n    text=&quot;...&quot;\n    confirmText=&quot;Confirm&quot;\n    cancelText=&quot;Cancel&quot;\n&gt;\n    &lt;q-button&gt;...&lt;/q-button&gt;\n&lt;/q-popover&gt;\n\n&lt;!-- Customize Content --&gt;\n\n&lt;q-popover&gt;\n    &lt;q-button&gt;...&lt;/q-button&gt;\n    &lt;div slot=&quot;content&quot;&gt;\n        &lt;q-text&gt;...&lt;/q-text&gt;\n    &lt;/div&gt;\n&lt;/q-popover&gt;\n```\n\n## {{ $t("common.usage.property") }}\n\n<property-block>\n    <property-item\n        name="mode"\n        definition="Activation mode"\n        defaults="hover"\n        :values="[\'none\', \'click\', \'hover\']"\n    >\n        <q-popover text="Hover pop-up mode">\n            <q-button>Hover Me</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="open"\n        definition="Whether to open (v-model)"\n        defaults="false"\n        values="Boolean"\n    >\n    </property-item>\n    <property-item\n        name="position"\n        definition="Popup position"\n        defaults="top"\n        :values="[\'top-left\', \'top\', \'top-right\', \'bottom-left\', \'bottom\', \'bottom-right\', \'left-top\', \'left\', \'left-bottom\', \'right-top\', \'right\', \'right-bottom\']"\n    >\n        <q-popover text="Pop up left" position="left">\n            <q-button>Hover Me</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="width"\n        definition="The width of the pop-up box rendered using the built-in style"\n        defaults="100px"\n        values="String"\n    >\n    </property-item>\n    <property-item\n        name="title"\n        definition="Set the title of the built-in style of the pop-up box"\n        values="String"\n    >\n        <q-popover title="Popup Title">\n            <q-button>Hover Me</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="text"\n        definition="Set the text content of the built-in style of the pop-up box"\n        values="String"\n    >\n        <q-popover text="Popup text content">\n            <q-button>Hover Me</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="textAlign"\n        definition="Set the text content of the built-in style of the pop-up box"\n        values="String"\n    >\n        <q-popover text="Popup text content">\n            <q-button>Hover Me</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="confirmText"\n        definition="Set the confirm button text of the built-in style of the pop-up box"\n        values="String"\n    >\n        <q-popover title="Popover" confirmText="Confirm">\n            <q-button>Hover Me</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="cancelText"\n        definition="Set the cancel button text of the built-in style of the pop-up box"\n        values="String"\n    >\n        <q-popover title="Popover" cancelText="Cancel">\n            <q-button>Hover Me</q-button>\n        </q-popover>\n    </property-item>\n</property-block>\n\n## {{ $t("common.usage.events") }}\n\n<event-block>\n    <event-item\n        name="confirm"\n        definition="Confirm button was clicked"\n    ></event-item>\n    <event-item\n        name="cancel"\n        definition="Cancel button was clicked"\n    ></event-item>\n</event-block>'}}]);