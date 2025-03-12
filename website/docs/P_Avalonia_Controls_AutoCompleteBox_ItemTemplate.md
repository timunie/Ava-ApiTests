# ItemTemplate Property


Gets or sets the DataTemplate used to display each item in the drop-down portion of the control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IDataTemplate ItemTemplate { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ItemTemplate As IDataTemplate
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ItemTemplate : IDataTemplate with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteBox.Properties.cs#L250" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Templates_IDataTemplate">IDataTemplate</a>  
The DataTemplate used to display each item in the drop-down. The default is null.You use the ItemTemplate property to specify the visualization of the data objects in the drop-down portion of the AutoCompleteBox control. If your AutoCompleteBox is bound to a collection and you do not provide specific display instructions by using a DataTemplate, the resulting UI of each item is a string representation of each object in the underlying collection.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

