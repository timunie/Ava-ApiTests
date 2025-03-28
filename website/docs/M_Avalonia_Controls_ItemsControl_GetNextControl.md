# GetNextControl Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected static IInputElement? GetNextControl(
	INavigableContainer container,
	NavigationDirection direction,
	IInputElement? from,
	bool wrap
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Shared Function GetNextControl ( 
	container As INavigableContainer,
	direction As NavigationDirection,
	from As IInputElement,
	wrap As Boolean
) As IInputElement
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetNextControl : 
        container : INavigableContainer * 
        direction : NavigationDirection * 
        from : IInputElement * 
        wrap : bool -> IInputElement 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsControl.cs#L828" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_INavigableContainer">INavigableContainer</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Input_IInputElement">IInputElement</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

