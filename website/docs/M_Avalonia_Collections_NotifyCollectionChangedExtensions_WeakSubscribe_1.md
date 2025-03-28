# WeakSubscribe(INotifyCollectionChanged, NotifyCollectionChangedEventHandler) Method


Subscribes to the CollectionChanged event using a weak subscription.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IDisposable WeakSubscribe(
	this INotifyCollectionChanged collection,
	NotifyCollectionChangedEventHandler handler
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function WeakSubscribe ( 
	collection As INotifyCollectionChanged,
	handler As NotifyCollectionChangedEventHandler
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member WeakSubscribe : 
        collection : INotifyCollectionChanged * 
        handler : NotifyCollectionChangedEventHandler -> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/NotifyCollectionChangedExtensions.cs#L35" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a></dt><dd>The collection.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler" target="_blank" rel="noopener noreferrer">NotifyCollectionChangedEventHandler</a></dt><dd>An action called when the collection event is raised.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
A disposable used to terminate the subscription.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Collections_NotifyCollectionChangedExtensions">NotifyCollectionChangedExtensions Class</a>  
<a href="Overload_Avalonia_Collections_NotifyCollectionChangedExtensions_WeakSubscribe">WeakSubscribe Overload</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

