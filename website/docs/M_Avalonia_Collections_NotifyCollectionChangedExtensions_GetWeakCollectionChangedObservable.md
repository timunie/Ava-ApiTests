# GetWeakCollectionChangedObservable Method


Gets a weak observable for the CollectionChanged event.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IObservable<NotifyCollectionChangedEventArgs> GetWeakCollectionChangedObservable(
	this INotifyCollectionChanged collection
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetWeakCollectionChangedObservable ( 
	collection As INotifyCollectionChanged
) As IObservable(Of NotifyCollectionChangedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetWeakCollectionChangedObservable : 
        collection : INotifyCollectionChanged -> IObservable<NotifyCollectionChangedEventArgs> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/NotifyCollectionChangedExtensions.cs#L17" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a></dt><dd>The collection.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs" target="_blank" rel="noopener noreferrer">NotifyCollectionChangedEventArgs</a>)  
An observable.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://learn.microsoft.com/dotnet/api/system.collections.specialized.inotifycollectionchanged" target="_blank" rel="noopener noreferrer">INotifyCollectionChanged</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Collections_NotifyCollectionChangedExtensions">NotifyCollectionChangedExtensions Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
