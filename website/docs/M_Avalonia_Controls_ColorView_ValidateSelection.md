# ValidateSelection Method


Validates the tab/panel/page selection taking into account the visibility of each item as well as the current selection.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void ValidateSelection()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub ValidateSelection
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ValidateSelection : unit -> unit 
override ValidateSelection : unit -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/ColorView/ColorView.cs#L81" title="View the source code">View Source</a>

Derived controls may re-implement this based on their default style / control template and any specialized selection needs.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ColorView">ColorView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
