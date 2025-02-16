---
title:ISceneBrushContent Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ISceneBrushContent Interface




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[NotClientImplementableAttribute]
public interface ISceneBrushContent : IImmutableBrush, 
	IBrush, IDisposable
```
**VB**
``` VB
<NotClientImplementableAttribute>
Public Interface ISceneBrushContent
	Inherits IImmutableBrush, IBrush, IDisposable
```
**F#**
``` F#
[<NotClientImplementableAttribute>]
type ISceneBrushContent = 
    interface
        interface IImmutableBrush
        interface IBrush
        interface IDisposable
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Media_IBrush">IBrush</a>, <a href="T_Avalonia_Media_IImmutableBrush">IImmutableBrush</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_ISceneBrushContent_Brush">Brush</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_Opacity">Opacity</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_IBrush">IBrush</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Media_ISceneBrushContent_Rect">Rect</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_Transform">Transform</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_IBrush">IBrush</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Media_IBrush_TransformOrigin">TransformOrigin</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Media_IBrush">IBrush</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_ISceneBrushContent_Render">Render(IDrawingContextImpl, Nullable(Matrix))</a></td>
<td> </td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_BrushExtensions_ToImmutable">ToImmutable()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Media_BrushExtensions">BrushExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
