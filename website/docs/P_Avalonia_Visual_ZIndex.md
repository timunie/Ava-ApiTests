# ZIndex Property


Gets or sets the Z index of the control.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int ZIndex { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ZIndex As Integer
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ZIndex : int with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Visual.cs#L310" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

## Remarks
Controls with a higher ZIndex will appear in front of controls with a lower ZIndex. If two controls have the same ZIndex then the control that appears later in the containing element's children collection will appear on top.

## See Also


#### Reference
<a href="T_Avalonia_Visual">Visual Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

