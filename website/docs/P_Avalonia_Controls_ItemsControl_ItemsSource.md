# ItemsSource Property


Gets or sets a collection used to generate the content of the <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IEnumerable? ItemsSource { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ItemsSource As IEnumerable
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ItemsSource : IEnumerable with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsControl.cs#L178" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>A common scenario is to use an <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a> such as a <a href="T_Avalonia_Controls_ListBox">ListBox</a> to display a data collection, or to bind an <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a> to a collection object. To bind an <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a> to a collection object, use the ItemsSource property. When the ItemsSource property is set, the <a href="P_Avalonia_Controls_ItemsControl_Items">Items</a> collection is made read-only and fixed-size. When ItemsSource is in use, setting the property to null removes the collection and restores usage to <a href="P_Avalonia_Controls_ItemsControl_Items">Items</a>, which will be an empty <a href="T_Avalonia_Controls_ItemCollection">ItemCollection</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

