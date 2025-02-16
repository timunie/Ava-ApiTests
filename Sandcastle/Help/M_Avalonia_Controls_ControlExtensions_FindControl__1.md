---
title:FindControl&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# FindControl&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public static T FindControl<T>(
	this Control control,
	string name
)
where T : Control

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function FindControl(Of T As Control) ( 
	control As Control,
	name As String
) As T
```
**F#**
``` F#
[<ExtensionAttribute>]
static member FindControl : 
        control : Control * 
        name : string -> 'T  when 'T : Control
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
T

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_Control">Control</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ControlExtensions">ControlExtensions Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
