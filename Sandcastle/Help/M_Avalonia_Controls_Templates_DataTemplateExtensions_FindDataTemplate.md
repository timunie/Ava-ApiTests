---
title:FindDataTemplate Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# FindDataTemplate Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public static IDataTemplate? FindDataTemplate(
	this Control control,
	Object data,
	IDataTemplate primary = null
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function FindDataTemplate ( 
	control As Control,
	data As Object,
	Optional primary As IDataTemplate = Nothing
) As IDataTemplate
```
**F#**
``` F#
[<ExtensionAttribute>]
static member FindDataTemplate : 
        control : Control * 
        data : Object * 
        ?primary : IDataTemplate 
(* Defaults:
        let _primary = defaultArg primary null
*)
-> IDataTemplate 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_Control">Control</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_DataTemplateExtensions">DataTemplateExtensions Class</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
