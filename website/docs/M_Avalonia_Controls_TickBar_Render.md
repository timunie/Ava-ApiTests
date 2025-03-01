import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Render Method


Draw ticks. Ticks can be draw in 8 different ways depends on Placement property and IsDirectionReversed property. This function also draw selection-tick(s) if IsSelectionRangeEnabled is 'true' and SelectionStart and SelectionEnd are valid. The primary ticks (for Minimum and Maximum value) height will be 100% of TickBar's render size (use Width or Height depends on Placement property). The secondary ticks (all other ticks, including selection-tics) height will be 75% of TickBar's render size. Brush that use to fill ticks is specified by Fill property.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override sealed void Render(
	DrawingContext dc
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides NotOverridable Sub Render ( 
	dc As DrawingContext
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Render : 
        dc : DrawingContext -> unit 
override Render : 
        dc : DrawingContext -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  DrawingContext</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TickBar">TickBar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
