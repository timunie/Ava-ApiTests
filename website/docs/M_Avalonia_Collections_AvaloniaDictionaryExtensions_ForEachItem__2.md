# ForEachItem&lt;TKey, TValue&gt; Method


Invokes an action for each item in a collection and subsequently each item added or removed from the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IDisposable ForEachItem<TKey, TValue>(
	this IAvaloniaReadOnlyDictionary<TKey, TValue> collection,
	Action<TKey, TValue> added,
	Action<TKey, TValue> removed,
	Action reset,
	bool weakSubscription = false
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function ForEachItem(Of TKey, TValue) ( 
	collection As IAvaloniaReadOnlyDictionary(Of TKey, TValue),
	added As Action(Of TKey, TValue),
	removed As Action(Of TKey, TValue),
	reset As Action,
	Optional weakSubscription As Boolean = false
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member ForEachItem : 
        collection : IAvaloniaReadOnlyDictionary<'TKey, 'TValue> * 
        added : Action<'TKey, 'TValue> * 
        removed : Action<'TKey, 'TValue> * 
        reset : Action * 
        ?weakSubscription : bool 
(* Defaults:
        let _weakSubscription = defaultArg weakSubscription false
*)
-> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaDictionaryExtensions.cs#L45" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_IAvaloniaReadOnlyDictionary_2">IAvaloniaReadOnlyDictionary</a>(TKey, TValue)</dt><dd>The collection.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TKey, TValue)</dt><dd>An action called initially for each item in the collection and subsequently for each item added to the collection. The parameters passed are the index in the collection and the item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TKey, TValue)</dt><dd>An action called for each item removed from the collection. The parameters passed are the index in the collection and the item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>An action called when the collection is reset. This will be followed by calls to <em>added</em> for each item present in the collection after the reset.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Indicates if a weak subscription should be used to track changes to the collection.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The key type of the collection items.</dd><dt /><dd>The value type of the collection items.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
A disposable used to terminate the subscription.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Collections_IAvaloniaReadOnlyDictionary_2">IAvaloniaReadOnlyDictionary</a>(TKey, TValue). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaDictionaryExtensions">AvaloniaDictionaryExtensions Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
