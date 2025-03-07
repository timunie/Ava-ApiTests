# NavigateUri Property


Gets or sets the Uniform Resource Identifier (URI) automatically navigated to when the <a href="T_Avalonia_Controls_HyperlinkButton">HyperlinkButton</a> is clicked.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Uri? NavigateUri \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property NavigateUri As Uri
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member NavigateUri : Uri with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/HyperlinkButton.cs#L61" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a>The URI may be any website or file location that can be launched using the <a href="T_Avalonia_Platform_Storage_ILauncher">ILauncher</a> service.   
  
 If a URI should not be automatically launched, leave this property unset and use the <a href="E_Avalonia_Controls_Button_Click">Click</a> and <a href="P_Avalonia_Controls_HyperlinkButton_IsVisited">IsVisited</a> members directly.

## See Also


#### Reference
<a href="T_Avalonia_Controls_HyperlinkButton">HyperlinkButton Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
