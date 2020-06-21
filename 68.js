(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{647:function(t,n,e){"use strict";e.r(n),n.default='# 开关 <strong>Switch</strong>\n\n## {{ $t("common.usage.preview") }}\n\n<example></example>\n\n## {{ $t("common.usage.usage") }}\n\n```\n&lt;q-switch&gt;&lt;/q-switch&gt;\n&lt;!-- 关闭状态 --&gt;\n\n&lt;q-switch :value=&quot;true&quot;&gt;&lt;/q-switch&gt;\n&lt;!-- 打开状态 --&gt;\n\n&lt;q-switch disable&gt;&lt;/q-switch&gt;\n&lt;!-- 关闭且禁用状态 --&gt;\n\n&lt;q-switch disable :value=&quot;true&quot;&gt;&lt;/q-switch&gt;\n&lt;!-- 打开且禁用状态 --&gt;\n```\n\n{{ $t("common.usage.usage-tips") }}\n\n\n## {{ $t("common.usage.property") }}\n\n<property-block>\n    <property-item\n        name="size"\n        definition="组件尺寸"\n        defaults="medium"\n        :values="[\'small\', \'medium\', \'large\']"\n    >\n        <q-switch size="small"></q-switch>\n        <q-switch size="medium"></q-switch>\n        <q-switch size="large"></q-switch>\n    </property-item>\n    <property-item\n        name="value"\n        definition="激活状态"\n        defaults="false"\n        values="Boolean"\n    >\n        <q-switch value></q-switch>\n    </property-item>\n    <property-item\n        name="disable"\n        definition="禁用状态"\n        defaults="false"\n        values="Boolean"\n    >\n        <q-switch disable></q-switch>\n    </property-item>\n</property-block>\n'}}]);