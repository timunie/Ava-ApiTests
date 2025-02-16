---
title:RuntimeXamlLoaderConfiguration.XamlDiagnosticFunc Delegate
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# RuntimeXamlLoaderConfiguration.XamlDiagnosticFunc Delegate




## Definition
**Namespace:** <a href="N_Avalonia_Markup_Xaml">Avalonia.Markup.Xaml</a>  
**Assembly:** Avalonia.Markup.Xaml (in Avalonia.Markup.Xaml.dll) Version: 11.2.4

**C#**
``` C#
public delegate RuntimeXamlDiagnosticSeverity XamlDiagnosticFunc(
	RuntimeXamlDiagnostic diagnostic
)
```
**VB**
``` VB
Public Delegate Function XamlDiagnosticFunc ( 
	diagnostic As RuntimeXamlDiagnostic
) As RuntimeXamlDiagnosticSeverity
```
**F#**
``` F#
type XamlDiagnosticFunc = 
    delegate of 
        diagnostic : RuntimeXamlDiagnostic -> RuntimeXamlDiagnosticSeverity
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Markup_Xaml_RuntimeXamlDiagnostic">RuntimeXamlDiagnostic</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Markup_Xaml_RuntimeXamlDiagnosticSeverity">RuntimeXamlDiagnosticSeverity</a>

## See Also


#### Reference
<a href="N_Avalonia_Markup_Xaml">Avalonia.Markup.Xaml Namespace</a>  
