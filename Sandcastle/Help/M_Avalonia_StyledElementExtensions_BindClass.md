---
title:BindClass Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# BindClass Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IDisposable BindClass(
	this StyledElement target,
	string className,
	IBinding source,
	Object anchor
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function BindClass ( 
	target As StyledElement,
	className As String,
	source As IBinding,
	anchor As Object
) As IDisposable
```
**F#**
``` F#
[<ExtensionAttribute>]
static member BindClass : 
        target : StyledElement * 
        className : string * 
        source : IBinding * 
        anchor : Object -> IDisposable 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledElement">StyledElement</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Data_IBinding">IBinding</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_StyledElement">StyledElement</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_StyledElementExtensions">StyledElementExtensions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
