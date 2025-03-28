# ItemFilter Property


Gets or sets the custom method that uses user-entered text to filter the items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property for display in the drop-down.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AutoCompleteFilterPredicate<Object?>? ItemFilter { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ItemFilter As AutoCompleteFilterPredicate(Of Object)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ItemFilter : AutoCompleteFilterPredicate<Object> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteBox.Properties.cs#L418" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_AutoCompleteFilterPredicate_1">AutoCompleteFilterPredicate</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)  
The custom method that uses the user-entered text to filter the items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property. The default is null.

## Remarks
The filter mode is automatically set to Custom if you set the ItemFilter property.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

