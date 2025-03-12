# GetNext Method


Gets the next element in the specified navigation direction.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
(bool handled, IInputElement next) GetNext(
	IInputElement element,
	NavigationDirection direction
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetNext ( 
	element As IInputElement,
	direction As NavigationDirection
) As (handled As Boolean, next As IInputElement)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetNext : 
        element : IInputElement * 
        direction : NavigationDirection -> ValueTuple<bool, IInputElement> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/ICustomKeyboardNavigation.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputElement">IInputElement</a></dt><dd>The element being navigated from.</dd><dt>  <a href="T_Avalonia_Input_NavigationDirection">NavigationDirection</a></dt><dd>The navigation direction.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.valuetuple-2" target="_blank" rel="noopener noreferrer">ValueTuple</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>, <a href="T_Avalonia_Input_IInputElement">IInputElement</a>)  
A tuple consisting of: - A boolean indicating whether the request was handled. If false is returned then custom navigation will be ignored and default navigation will take place. - If handled is true: the next element in the navigation direction, or null if default navigation should continue outside the element.

## See Also


#### Reference
<a href="T_Avalonia_Input_ICustomKeyboardNavigation">ICustomKeyboardNavigation Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

