# Item Property


Retrieves the item at the specified index.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public T this[
	int index
] { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Default Property Item ( 
	index As Integer
) As T
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Item : 'T with get
override Item : 'T with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsSourceView.cs#L329" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_ItemsSourceView_1">T</a>  
The item.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1.item" target="_blank" rel="noopener noreferrer">IReadOnlyList(T).Item(Int32)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsSourceView_1">ItemsSourceView(T) Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

