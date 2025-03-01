import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# NavigateUri Property


Gets or sets the Uniform Resource Identifier (URI) automatically navigated to when the <a href="T_Avalonia_Controls_HyperlinkButton">HyperlinkButton</a> is clicked.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Uri? NavigateUri { get; set; }
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



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a>The URI may be any website or file location that can be launched using the ILauncher service.   
  
 If a URI should not be automatically launched, leave this property unset and use the <a href="E_Avalonia_Controls_Button_Click">Click</a> and <a href="P_Avalonia_Controls_HyperlinkButton_IsVisited">IsVisited</a> members directly.

## See Also


#### Reference
<a href="T_Avalonia_Controls_HyperlinkButton">HyperlinkButton Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
