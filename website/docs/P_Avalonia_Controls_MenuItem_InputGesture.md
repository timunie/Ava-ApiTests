# InputGesture Property


Gets or sets the input gesture that will be displayed in the menu item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public KeyGesture? InputGesture { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property InputGesture As KeyGesture
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member InputGesture : KeyGesture with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/MenuItem.cs#L267" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Input_KeyGesture">KeyGesture</a>

## Remarks
Setting this property does not cause the input gesture to be handled by the menu item, it simply displays the gesture text in the menu.

## See Also


#### Reference
<a href="T_Avalonia_Controls_MenuItem">MenuItem Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

