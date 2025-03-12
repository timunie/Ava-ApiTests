# WidthChanged Property


Gets a value indicating whether the width of the new size is considered different than the previous size width.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool WidthChanged { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property WidthChanged As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member WidthChanged : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/SizeChangedEventArgs.cs#L81" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>This will take into account layout epsilon and will not be true if both widths are considered equivalent for layout purposes. Remember there can be small variations in the calculations between layout cycles due to rounding and precision even when the size has not otherwise changed.

## See Also


#### Reference
<a href="T_Avalonia_Controls_SizeChangedEventArgs">SizeChangedEventArgs Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

