# Items Property


Gets the items to display.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ContentAttribute]
public ItemCollection Items { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ContentAttribute>
Public ReadOnly Property Items As ItemCollection
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ContentAttribute>]
member Items : ItemCollection with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsControl.cs#L124" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_ItemCollection">ItemCollection</a>You use either the Items or the <a href="P_Avalonia_Controls_ItemsControl_ItemsSource">ItemsSource</a> property to specify the collection that should be used to generate the content of your <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>. When the <a href="P_Avalonia_Controls_ItemsControl_ItemsSource">ItemsSource</a> property is set, the Items collection is made read-only and fixed-size. When <a href="P_Avalonia_Controls_ItemsControl_ItemsSource">ItemsSource</a> is in use, setting the <a href="P_Avalonia_Controls_ItemsControl_ItemsSource">ItemsSource</a> property to null removes the collection and restores usage to Items, which will be an empty <a href="T_Avalonia_Controls_ItemCollection">ItemCollection</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

