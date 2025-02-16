---
title:ForEachItem&lt;T&gt;(IAvaloniaReadOnlyList&lt;T&gt;, Action&lt;T&gt;, Action&lt;T&gt;, Action, Boolean) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ForEachItem&lt;T&gt;(IAvaloniaReadOnlyList&lt;T&gt;, Action&lt;T&gt;, Action&lt;T&gt;, Action, Boolean) Method




## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IDisposable ForEachItem<T>(
	this IAvaloniaReadOnlyList<T> collection,
	Action<T> added,
	Action<T> removed,
	Action reset,
	bool weakSubscription = false
)

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function ForEachItem(Of T) ( 
	collection As IAvaloniaReadOnlyList(Of T),
	added As Action(Of T),
	removed As Action(Of T),
	reset As Action,
	Optional weakSubscription As Boolean = false
) As IDisposable
```
**F#**
``` F#
[<ExtensionAttribute>]
static member ForEachItem : 
        collection : IAvaloniaReadOnlyList<'T> * 
        added : Action<'T> * 
        removed : Action<'T> * 
        reset : Action * 
        ?weakSubscription : bool 
(* Defaults:
        let _weakSubscription = defaultArg weakSubscription false
*)
-> IDisposable 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_IAvaloniaReadOnlyList_1">IAvaloniaReadOnlyList</a>(T)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(T)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(T)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Collections_IAvaloniaReadOnlyList_1">IAvaloniaReadOnlyList</a>(T). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaListExtensions">AvaloniaListExtensions Class</a>  
<a href="Overload_Avalonia_Collections_AvaloniaListExtensions_ForEachItem">ForEachItem Overload</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
