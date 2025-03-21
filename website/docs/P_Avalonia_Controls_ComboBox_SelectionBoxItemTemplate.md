# SelectionBoxItemTemplate Property


Gets or sets the DataTemplate used to display the selected item. This has a higher priority than <a href="P_Avalonia_Controls_ItemsControl_ItemTemplate">ItemTemplate</a> if set.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[InheritDataTypeFromItemsAttribute("ItemsSource")]
public IDataTemplate? SelectionBoxItemTemplate { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<InheritDataTypeFromItemsAttribute("ItemsSource")>
Public Property SelectionBoxItemTemplate As IDataTemplate
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<InheritDataTypeFromItemsAttribute("ItemsSource")>]
member SelectionBoxItemTemplate : IDataTemplate with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ComboBox.cs#L187" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ComboBox">ComboBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

