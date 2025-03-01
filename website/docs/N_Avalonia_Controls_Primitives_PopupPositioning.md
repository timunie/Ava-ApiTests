import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Avalonia.Controls.Primitives.PopupPositioning Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_CustomPopupPlacement">CustomPopupPlacement</a></td>
<td>Defines custom placement parameters for a <a href="T_Avalonia_Controls_Primitives_PopupPositioning_CustomPopupPlacementCallback">CustomPopupPlacementCallback</a> callback.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_ManagedPopupPositioner">ManagedPopupPositioner</a></td>
<td>An <a href="T_Avalonia_Controls_Primitives_PopupPositioning_IPopupPositioner">IPopupPositioner</a> implementation for platforms on which a popup can be arbitrarily positioned.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_ManagedPopupPositionerPopupImplHelper">ManagedPopupPositionerPopupImplHelper</a></td>
<td>This class is used to simplify integration of IPopupImpl implementations with popup positioner</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_ManagedPopupPositionerScreenInfo">ManagedPopupPositionerScreenInfo</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionRequest">PopupPositionRequest</a></td>
<td> </td>
</tr>
</table>

## Structures
<table>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerParameters">PopupPositionerParameters</a></td>
<td>Provides positioning parameters to <a href="T_Avalonia_Controls_Primitives_PopupPositioning_IPopupPositioner">IPopupPositioner</a>.</td>
</tr>
</table>

## Interfaces
<table>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_IManagedPopupPositionerPopup">IManagedPopupPositionerPopup</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_IPopupPositioner">IPopupPositioner</a></td>
<td>Positions an <a href="T_Avalonia_Controls_Primitives_IPopupHost">IPopupHost</a>.</td>
</tr>
</table>

## Delegates
<table>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_CustomPopupPlacementCallback">CustomPopupPlacementCallback</a></td>
<td>Represents a method that provides custom positioning for a <a href="T_Avalonia_Controls_Primitives_Popup">Popup</a> control.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_ManagedPopupPositionerPopupImplHelper_MoveResizeDelegate">ManagedPopupPositionerPopupImplHelper.MoveResizeDelegate</a></td>
<td> </td>
</tr>
</table>

## Enumerations
<table>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupAnchor">PopupAnchor</a></td>
<td>Defines the edges around an anchor rectangle on which a popup will open.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupGravity">PopupGravity</a></td>
<td>Defines the direction in which a popup will open.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Controls_Primitives_PopupPositioning_PopupPositionerConstraintAdjustment">PopupPositionerConstraintAdjustment</a></td>
<td>Defines how a popup position will be adjusted if the unadjusted position would result in the popup being partly constrained.</td>
</tr>
</table>