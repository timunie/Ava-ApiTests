# SearchText Property


Gets the text that is used to filter items in the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> item collection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public string? SearchText { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property SearchText As String
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SearchText : string with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteBox.Properties.cs#L362" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
The text that is used to filter items in the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> item collection.

## Remarks
The SearchText value is typically the same as the Text property, but is set after the TextChanged event occurs and before the Populating event.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

