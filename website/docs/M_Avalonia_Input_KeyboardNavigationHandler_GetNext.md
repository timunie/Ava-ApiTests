# GetNext Method


Gets the next control in the specified navigation direction.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IInputElement? GetNext(
	IInputElement element,
	NavigationDirection direction
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetNext ( 
	element As IInputElement,
	direction As NavigationDirection
) As IInputElement
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetNext : 
        element : IInputElement * 
        direction : NavigationDirection -> IInputElement 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyboardNavigationHandler.cs#L53" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd>The element.</dd><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd>The navigation direction.</dd></dl>

#### Return Value
<a href="T_Avalonia_Input_IInputElement">IInputElement</a>  
The next element in the specified direction, or null if *element* was the last in the requested direction.

## See Also


#### Reference
<a href="T_Avalonia_Input_KeyboardNavigationHandler">KeyboardNavigationHandler Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

