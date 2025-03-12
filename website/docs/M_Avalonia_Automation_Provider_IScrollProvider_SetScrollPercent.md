# SetScrollPercent Method


Sets the horizontal and vertical scroll position as a percentage of the total content area within the control.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void SetScrollPercent(
	double horizontalPercent,
	double verticalPercent
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub SetScrollPercent ( 
	horizontalPercent As Double,
	verticalPercent As Double
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetScrollPercent : 
        horizontalPercent : float * 
        verticalPercent : float -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Provider/IScrollProvider.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The horizontal position as a percentage of the content area's total range. <a href="F_Avalonia_Automation_ScrollPatternIdentifiers_NoScroll">NoScroll</a> should be passed in if the control cannot be scrolled in this direction.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The vertical position as a percentage of the content area's total range. <a href="F_Avalonia_Automation_ScrollPatternIdentifiers_NoScroll">NoScroll</a> should be passed in if the control cannot be scrolled in this direction.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Automation_Provider_IScrollProvider">IScrollProvider Interface</a>  
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  

