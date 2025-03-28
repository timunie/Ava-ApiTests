# ForEachItem&lt;T&gt;(IAvaloniaReadOnlyList&lt;T&gt;, Action&lt;T&gt;, Action&lt;T&gt;, Action, Boolean) Method


Invokes an action for each item in a collection and subsequently each item added or removed from the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IDisposable ForEachItem<T>(
	this IAvaloniaReadOnlyList<T> collection,
	Action<T> added,
	Action<T> removed,
	Action reset,
	bool weakSubscription = false
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function ForEachItem(Of T) ( 
	collection As IAvaloniaReadOnlyList(Of T),
	added As Action(Of T),
	removed As Action(Of T),
	reset As Action,
	Optional weakSubscription As Boolean = false
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
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
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaListExtensions.cs#L44" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_IAvaloniaReadOnlyList_1">IAvaloniaReadOnlyList</a>(T)</dt><dd>The collection.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(T)</dt><dd>An action called initially for each item in the collection and subsequently for each item added to the collection. The parameters passed are the index in the collection and the item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(T)</dt><dd>An action called for each item removed from the collection. The parameters passed are the index in the collection and the item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>An action called when the collection is reset.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Indicates if a weak subscription should be used to track changes to the collection.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the collection items.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
A disposable used to terminate the subscription.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Collections_IAvaloniaReadOnlyList_1">IAvaloniaReadOnlyList</a>(T). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaListExtensions">AvaloniaListExtensions Class</a>  
<a href="Overload_Avalonia_Collections_AvaloniaListExtensions_ForEachItem">ForEachItem Overload</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

