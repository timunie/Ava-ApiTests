---
title:StartWithClassicDesktopLifetime(AppBuilder, String[], Action&lt;IClassicDesktopStyleApplicationLifetime&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# StartWithClassicDesktopLifetime(AppBuilder, String[], Action&lt;IClassicDesktopStyleApplicationLifetime&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public static int StartWithClassicDesktopLifetime(
	this AppBuilder builder,
	string[] args,
	Action<IClassicDesktopStyleApplicationLifetime>? lifetimeBuilder = null
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function StartWithClassicDesktopLifetime ( 
	builder As AppBuilder,
	args As String(),
	Optional lifetimeBuilder As Action(Of IClassicDesktopStyleApplicationLifetime) = Nothing
) As Integer
```
**F#**
``` F#
[<ExtensionAttribute>]
static member StartWithClassicDesktopLifetime : 
        builder : AppBuilder * 
        args : string[] * 
        ?lifetimeBuilder : Action<IClassicDesktopStyleApplicationLifetime> 
(* Defaults:
        let _lifetimeBuilder = defaultArg lifetimeBuilder null
*)
-> int 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_AppBuilder">AppBuilder</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime">IClassicDesktopStyleApplicationLifetime</a>)  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AppBuilder">AppBuilder</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions">ClassicDesktopStyleApplicationLifetimeExtensions Class</a>  
<a href="Overload_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_StartWithClassicDesktopLifetime">StartWithClassicDesktopLifetime Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
