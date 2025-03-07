# MinimumPrefixLength Property


Gets or sets the minimum number of characters required to be entered in the text box before the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> displays possible matches.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int MinimumPrefixLength \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property MinimumPrefixLength As Integer
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member MinimumPrefixLength : int with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteBox.Properties.cs#L214" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
The minimum number of characters to be entered in the text box before the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> displays possible matches. The default is 1.If you set MinimumPrefixLength to -1, the AutoCompleteBox will not provide possible matches. There is no maximum value, but setting MinimumPrefixLength to value that is too large will prevent the AutoCompleteBox from providing possible matches as well.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
