# StyleKeyOverride Property


Gets the type by which the element is styled.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Type StyleKeyOverride { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides ReadOnly Property StyleKeyOverride As Type
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract StyleKeyOverride : Type with get
override StyleKeyOverride : Type with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Window.cs#L446" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a>Usually controls are styled by their own type, but there are instances where you want an element to be styled by its base type, e.g. creating SpecialButton that derives from Button and adds extra functionality but is still styled as a regular Button. Override this property to change the style for a control class, returning the type that you wish the elements to be styled as.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Window">Window Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

