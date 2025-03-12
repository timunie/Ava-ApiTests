# GetControl Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override IInputElement? GetControl(
	NavigationDirection direction,
	IInputElement? from,
	bool wrap
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function GetControl ( 
	direction As NavigationDirection,
	from As IInputElement,
	wrap As Boolean
) As IInputElement
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetControl : 
        direction : NavigationDirection * 
        from : IInputElement * 
        wrap : bool -> IInputElement 
override GetControl : 
        direction : NavigationDirection * 
        from : IInputElement * 
        wrap : bool -> IInputElement 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/VirtualizingStackPanel.cs#L296" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Input_IInputElement">IInputElement</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingStackPanel">VirtualizingStackPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

